import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: {
  params: {
    rid: string
  }
}) {
  const res = await fetch("http://localhost:8181/v1/report/routine/" + params.rid + "/indicators")
  return NextResponse.json(await res.json());
}
