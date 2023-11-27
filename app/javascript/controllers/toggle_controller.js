import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggleableElement"]
  fire(){
    this.toggleableElementTarget.classList.toggle("d-none")
  }
}
