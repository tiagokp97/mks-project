import { StyledSkeleton } from "./styled"

export default function Skeleton() {
    return (
        <div>
            <StyledSkeleton>
                <div className="img"></div>

                <div className="box-text">
                    <div className="text1"></div>
                    <div className="text2"></div>
                </div>

                <div className="text" />
                <span className="button"></span>
            </StyledSkeleton>
        </div>
    )
}
