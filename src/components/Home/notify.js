import { modal as Modal } from 'tingle.js'

export class Notify {
  constructor () {
    this.Modal = new Modal({
      footer: true,
      stickyFooter: false,
      closeMethods: ['overlay', 'escape'],
      cssClass: [
        'text-center',
        'd-flex',
        'flex-column',
        'justify-content-between',
        'align-items-center'
      ],
      onOpen: function () {
        console.log('modal open')
      },
      onClose: function () {
        console.log('modal closed')
      },
      beforeClose: function () {
        return true
      }
    })

    this.Modal.addFooterBtn(
      '<p dir="rtl" class="m-0 py-1 text-fa">باشه!</p>',
      'rounded tingle-btn tingle-btn--primary py-2 text-fa',
      function () {
        this.Modal.close()
      }.bind(this)
    )
  }

  setContent (content) {
    this.Modal.setContent(`
    <i class="far fa-frown fa-7x"></i>
    <p dir="rtl" class="my-2 text-fa text-bold">${content}</p>`
    )
  }

  open () {
    this.Modal.open()
  }
}
