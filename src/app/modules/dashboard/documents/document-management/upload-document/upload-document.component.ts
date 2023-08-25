import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationPaths} from "@core/enums/navigation-paths.enum";
import {ButtonTypeEnum} from "@core/enums/button-type.enum";
import {FormField} from "@core/types/form-builder.model";
import {FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-upload-document',
    templateUrl: './upload-document.component.html',
    styleUrls: ['./upload-document.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadDocumentComponent {

    protected readonly NavigationPaths = NavigationPaths;
    protected readonly ButtonTypeEnum = ButtonTypeEnum;

    formFields: FormField[] = [
        {
            key: 'name',
            label: 'NAME',
            componentType: 'textbox',
            inputType: 'text',
            validators: [Validators.required],
            placeholder: 'ENTER',
            maxLength: 500,
        },
        {
            key: 'shared',
            label: 'SHARED',
            componentType: 'toggle',
            toggleText: 'SHARED_DESC',
            checkbox: true,
            validators: [Validators.required],
        },
        {
            key: 'files',
            componentType: 'file',
            maxFile: 'DOCUMENTS_SUPPORTED_FILES',
            validators: [Validators.required],
        },
    ]
    form!: FormGroup;

    uploadDocument() {
        //todo continue
        console.log('Upload document')
    }
}
