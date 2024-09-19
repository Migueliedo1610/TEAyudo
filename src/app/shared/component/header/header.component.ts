import { Component, OnInit, Input, inject } from "@angular/core";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() backbutton!: string;
  @Input() isModal!: boolean;

  utilSvc = inject(UtilsService);

  ngOnInit() {}

  dismissModal() {
    this.utilSvc.dismissModal();
  }
}
