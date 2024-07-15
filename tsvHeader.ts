import type { Split } from "ts-toolbelt/out/String/Split";

export function tsvHeader<H extends string>(head: H) {
    return head.split("\t") as Split<H, "\t">;
}
