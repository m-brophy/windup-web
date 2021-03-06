import {Component, OnDestroy, OnInit} from "@angular/core";
import {Inject, Input} from '@angular/core';

@Component({
    selector: 'wu-progress-bar',
    template: `
        <div class="progress-container progress-description-left" style="padding-left: 135px;">
        <div class="progress-description" style="max-width: 130px;">
            <div class="spinner spinner-xs spinner-inline"></div>&nbsp;<strong i18n="Analysis id">Analysis:</strong> #{{activeExecutionId}}
        </div>
        <div class="progress" style="margin-bottom: 0px; margin-right: 0px;">
            <div
                    class="progress-bar" role="progressbar"
                    aria-valuemin="0"
                    [attr.aria-valuenow]="currentValue"
                    [attr.aria-valuemax]="maxValue"
                    [style.width]="(currentValue/maxValue)*100 + '%'"
                    style="color: #363636; text-align: left; white-space: nowrap; padding-left: 5px;">
                    <strong i18n="Progressbar task">Task:</strong> {{taskName ? taskName : "Starting..."}} ({{currentValue ? currentValue : "?"}}/{{maxValue ? maxValue : "?"}})
            </div>
        </div></div>`
})
export class ProgressBarComponent {

    @Input()
    taskName: string;
    @Input()
    minValue: number;
    @Input()
    maxValue: number;
    @Input()
    currentValue: number;
    @Input()
    activeExecutionId: number;

    constructor() {}
}
