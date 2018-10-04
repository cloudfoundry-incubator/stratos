import { Component, OnInit } from '@angular/core';
import { KubernetesNodeService } from '../../../../services/kubernetes-node.service';

@Component({
  selector: 'app-kubernetes-node-info-card',
  templateUrl: './kubernetes-node-info-card.component.html',
  styleUrls: ['./kubernetes-node-info-card.component.scss']
})
export class KubernetesNodeInfoCardComponent implements OnInit {

  constructor(
    public kubeNodeService: KubernetesNodeService
  ) { }

  ngOnInit() {
  }

}
