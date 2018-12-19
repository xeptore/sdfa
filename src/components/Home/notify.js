import { modal as Modal } from 'tingle.js'

export const modal = new Modal({
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

modal.setContent(
  '<i class="far fa-frown fa-7x"></i><p dir="rtl" class="my-2 text-fa text-bold">فایلی که وارد کردی معتبر نیست.</p>'
)

modal.addFooterBtn(
  '<p dir="rtl" class="m-0 text-fa">باشه!</p>',
  'rounded tingle-btn tingle-btn--primary p-3 px-4 text-fa',
  function () {
    modal.close()
  }
)
