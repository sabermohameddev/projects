import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    exports: [
        ButtonModule,
        PasswordModule,
        TableModule,
        InputTextModule
    ]
})

export class MaterialModule {}