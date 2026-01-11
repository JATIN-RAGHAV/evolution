import { translate } from "../helper/translate_cords";
import type { line } from "../interfaces/line";

export const Print_svg = (props:{lines:line[], width:number, height:number}) => {
        const {lines,width,height} = props
        let id = 0;
        return <>
                <h1>Hello there second</h1>
                <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                {
                                lines.map((e) => {
                                        const start = translate(e.start,width,height);
                                        const end = translate(e.end,width,height);
                                        id += 1
                                        return (
                                                <line
                                                        id={`${id}`}
                                                        x1={start.x}
                                                        y1={start.y}
                                                        x2={end.x}
                                                        y2={end.y}
                                                        stroke="black"
                                                        strokeWidth='2'
                                                />
                                        )
                                })
                        }
                </svg>
        </>
}
