import {LoadingGearContainer, LoadingGearOne, LoadingGearThree, LoadingGearTwo} from "./styles"

export const Loading = ({theme = "light"}) => (
    <>
        <div className="d-flex justify-content-center">
            <LoadingGearContainer>
                <LoadingGearOne style={{filter: theme === "dark" ? "brightness(0)" : "brightness(0) invert(1)"}} />
                <LoadingGearTwo style={{filter: theme === "dark" ? "brightness(0)" : "brightness(0) invert(1)"}} />
                <LoadingGearThree style={{filter: theme === "dark" ? "brightness(0)" : "brightness(0) invert(1)"}} />
            </LoadingGearContainer>
        </div>
    </>
)