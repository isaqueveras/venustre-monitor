-- DROP TABLE IF EXISTS t_watcher, t_routine, t_execution, t_log, t_indicator, t_histogram CASCADE;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE t_watcher (
	"id" UUID PRIMARY KEY,
	"name" TEXT NOT NULL CHECK (CHAR_LENGTH("name") <= 150) UNIQUE,
	"run" TIMESTAMPTZ,
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE t_routine (
	"id" UUID PRIMARY KEY,
  "id_watcher" UUID NOT NULL REFERENCES t_watcher (id),
	"name" TEXT NOT NULL CHECK (CHAR_LENGTH("name") <= 150) UNIQUE,
	"desc" VARCHAR CHECK (CHAR_LENGTH("desc") <= 200),
	-- "state" VARCHAR,
  "path" VARCHAR NOT NULL,
  "interval" INTEGER NOT NULL,
	"load_interval" INTEGER,
	"start" INTEGER,
	"end" INTEGER,
	"run" TIMESTAMPTZ,
	"updated_at" TIMESTAMPTZ,
	"created_at" TIMESTAMPTZ NOT NULL
);

CREATE TABLE t_execution (
	"id" UUID PRIMARY KEY NOT NULL,
  "id_routine" UUID NOT NULL REFERENCES t_routine (id),
	"latency" FLOAT NOT NULL,
  "metadata" JSONB,
	"start" TIMESTAMPTZ NOT NULL,
	"end" TIMESTAMPTZ NOT NULL
);

CREATE TABLE t_indicator (
	"id" SERIAL PRIMARY KEY,
  "id_routine_execution" UUID NOT NULL REFERENCES t_execution (id),
	"key" TEXT NOT NULL,
	"value" FLOAT8 NOT NULL,
	"created_at" TIMESTAMPTZ NOT null DEFAULT NOW()
);

CREATE TABLE t_histogram (
	"id" SERIAL PRIMARY KEY,
  "id_routine_execution" UUID NOT NULL REFERENCES t_execution (id),
	"key" TEXT NOT NULL,
	"value" FLOAT8 NOT NULL,
	"created_at" TIMESTAMPTZ NOT null DEFAULT NOW()
);

CREATE TABLE t_log (
	"id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "id_routine_execution" UUID NOT NULL REFERENCES t_execution (id),
  "level" VARCHAR NOT NULL,
	"msg" VARCHAR NOT NULL,
	"ts" TIMESTAMPTZ NOT NULL,
	"path" TIMESTAMPTZ NOT NULL
);

-- DROP FUNCTION set_date_update();
-- DROP TRIGGER t_routine_set_date_update ON t_routine;

CREATE OR REPLACE FUNCTION set_date_update()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  IF (TG_OP = 'UPDATE') THEN
    NEW.updated_at = now();
    RETURN NEW;
  END IF;
END;
$function$;

CREATE TRIGGER t_routine_set_date_update BEFORE UPDATE ON t_routine FOR EACH ROW EXECUTE PROCEDURE set_date_update();

-- INDEX
CREATE INDEX t_histogram_key_idx ON public.t_histogram ("key");
CREATE INDEX t_histogram_id_idx ON public.t_histogram (id,created_at);
CREATE INDEX t_histogram_created_at_idx ON public.t_histogram (created_at);
