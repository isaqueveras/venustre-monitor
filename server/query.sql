WITH serial as (
	SELECT generate_series((NOW() - INTERVAL '30 min')::TIMESTAMP, NOW()::TIMESTAMP, '1 minute'::interval) ts
) SELECT
	date_trunc('minute', serial.ts) "time",
	COUNT(id) FILTER (WHERE date_trunc('minute', created_at) = date_trunc('minute', serial.ts)) total
from serial, public.t_histogram
where "key" = 'clientes_notificados'
group by 1
order by 1 asc;


select
	T."key",
	count(T.id),
	array_agg(T.ts),
	array_agg(T.total)
FROM (
	WITH serial AS (
		SELECT date_trunc('minute', ts) ts
		from generate_series((NOW() - INTERVAL '30 min')::TIMESTAMP, NOW()::TIMESTAMP, '1 minute'::interval) ts
	) SELECT
		id,
		"key",
		serial.ts,
		COUNT(id) FILTER (WHERE date_trunc('minute', created_at) = serial.ts) total
	from serial, public.t_histogram
	--where "key" = 'clientes_notificados'
	group by 1, 2, 3
--	order by 2 asc
) AS T
group by 1
