import type { line } from "../interfaces/line";

export const Print_svg = (props:{lines:line[], width:number, height:number}) => {
        const {lines,width,height} = props
        let id = 0;
        return <>
                <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                {
                                lines.map((e) => {
                                        id += 1
                                        return (
                                                <line
                                                        id={`${id}`}
                                                        x1={e.start.x}
                                                        y1={e.start.y}
                                                        x2={e.end.x}
                                                        y2={e.end.y}
                                                        stroke="#FFFFFF"
                                                        strokeWidth='1'
                                                />
                                        )
                                })
                        }
                </svg>
        </>
}
