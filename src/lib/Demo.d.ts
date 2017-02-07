/// <reference types="jquery" />
import { JQueryModuleBase } from "jquery-base";
export default class Demo extends JQueryModuleBase {
    constructor();
    init(): void;
    destroy(): void;
    test($element: JQuery): void;
    add(x: number, y: number): number;
}
