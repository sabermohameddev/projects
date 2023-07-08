import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';

@NgModule({
    exports: [
        ButtonModule,
        PasswordModule,
        TableModule
    ]
})

export class MaterialModule {}