import { createResponses, dummy } from "@/features/responses/createItem";
import { NextResponse } from "next/server";


export function GET() {
    const responses = createResponses({ dummy, count: 10})

    return NextResponse.json(
        { data: Array.from(responses.values()) },
        { status: 200 }
    )
}