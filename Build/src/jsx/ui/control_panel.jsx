import {InputField} from "./input_field";
import {Slider} from "./slider";
import {DropdownList} from "./dropdown";
import {CameraButton} from "./button";

export function UI(){
    return(
        <>
            <VerticalControlPanel/>
            <HorizontalControlPanel/>
            <VerticalControlPanel/>
        </>
    )
}

export function VerticalControlPanel(){
    return(
        <>
            <DropdownList name={'Type'} options={{
                INVALID: 0,
                PARALLEL: 1,
                POINT: 2,
            }} />
            <InputField name={'Eox'} />
            <Slider name={'Theta'} min={'0'} max={'360'} />
        </>
    )
}

export function HorizontalControlPanel(){
    return(
        <>
            <CameraButton/>
        </>
    )
}