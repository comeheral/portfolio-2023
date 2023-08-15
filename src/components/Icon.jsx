import '@/styles/components/icon.scss';

{/*
  Props :
  - icon : arrow-right, design, development, e-commerce
  - width : icon width style
  - color : dark, white
*/}

function Icon({ icon, width, color }){
  switch(icon){
    case 'arrow-right':
      return (
        <svg className={`icon icon--${color}`} style={{width: width}} width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M39.0075 25.2043L0 25.2043V19.4619L39.0086 19.4619L23.6072 4.06045L27.6676 0L50.0001 22.3325L27.6676 44.665L23.6072 40.6045L39.0075 25.2043Z" fill="#11212C"/>
        </svg>
      )
    case 'design':
      return (
        <svg className={`icon icon--${color}`} style={{width: width}} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.8094 39.6132C18.9706 38.9013 19.6033 38.3959 20.3333 38.3959H29.7083C30.4382 38.3959 31.0709 38.9013 31.2322 39.6132L32.0895 43.398C32.3815 44.7444 32.0251 46.0538 31.1433 47.0099C30.2772 47.9488 29.0123 48.4375 27.6458 48.4375H22.3958C19.7801 48.4375 17.302 46.2249 17.9559 43.3812L18.8094 39.6132ZM21.5814 41.5209L21.003 44.0743L21.0016 44.0805C20.944 44.3301 21.0072 44.5989 21.2387 44.8482C21.4769 45.1047 21.8811 45.3125 22.3958 45.3125H27.6458C28.2793 45.3125 28.6602 45.0928 28.8462 44.8911C29.0156 44.7075 29.1174 44.4456 29.0367 44.0661L28.4601 41.5209H21.5814Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M25.0312 20.7761C26.4364 20.7761 27.7517 21.4553 28.6843 22.6356L35.0363 30.6951C35.0369 30.6959 35.0375 30.6967 35.0381 30.6975C35.8978 31.781 36.6085 33.0118 36.4777 34.4276C36.3476 35.8361 35.4289 36.9407 34.3507 37.8969C34.3501 37.8974 34.3496 37.8979 34.3491 37.8984L30.7472 41.1047C30.1027 41.6785 29.115 41.6211 28.5412 40.9766C27.9674 40.332 28.0248 39.3443 28.6694 38.7706L32.2736 35.5621L32.2759 35.5601C33.2178 34.7249 33.3504 34.3091 33.366 34.1401C33.3809 33.9788 33.3323 33.5748 32.5887 32.6381L32.5853 32.6338L26.2323 24.5729C26.2321 24.5727 26.2325 24.5731 26.2323 24.5729C25.8317 24.0662 25.3863 23.9011 25.0312 23.9011C24.6761 23.9011 24.2312 24.0656 23.8306 24.5724C23.8304 24.5726 23.8307 24.5722 23.8306 24.5724L17.4738 32.6381C16.7227 33.5842 16.6533 34.0102 16.6671 34.1851C16.6785 34.331 16.7855 34.736 17.742 35.522C17.7579 35.5351 17.7735 35.5485 17.7889 35.5621L21.3931 38.7706C22.0376 39.3443 22.095 40.332 21.5212 40.9766C20.9474 41.6211 19.9598 41.6785 19.3152 41.1047L15.7333 37.9161C14.5968 36.9773 13.6644 35.867 13.5516 34.4294C13.4404 33.0115 14.172 31.7716 15.0244 30.6974C15.025 30.6966 15.0256 30.6959 15.0262 30.6951L21.377 22.6371C22.3095 21.4568 23.626 20.7761 25.0312 20.7761Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M25.0208 21.6042C25.8838 21.6042 26.5833 22.3037 26.5833 23.1667V28.4376C26.5833 29.3005 25.8838 30.0001 25.0208 30.0001C24.1579 30.0001 23.4583 29.3005 23.4583 28.4376V23.1667C23.4583 22.3037 24.1579 21.6042 25.0208 21.6042Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M24 5.72919C23.7171 5.72919 23.4792 5.96713 23.4792 6.25002V8.33335C23.4792 8.61624 23.7171 8.85419 24 8.85419H26.0834C26.3662 8.85419 26.6042 8.61624 26.6042 8.33335V6.25002C26.6042 5.96713 26.3662 5.72919 26.0834 5.72919H24ZM20.3542 6.25002C20.3542 4.24124 21.9912 2.60419 24 2.60419H26.0834C28.0921 2.60419 29.7292 4.24124 29.7292 6.25002V8.33335C29.7292 10.3421 28.0921 11.9792 26.0834 11.9792H24C21.9912 11.9792 20.3542 10.3421 20.3542 8.33335V6.25002Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16669 25.3543C3.16669 23.3456 4.80362 21.7083 6.81252 21.7083H8.89585C10.9048 21.7083 12.5417 23.3456 12.5417 25.3543V27.4376C12.5417 29.4464 10.9046 31.0834 8.89585 31.0834H6.81252C4.80374 31.0834 3.16669 29.4464 3.16669 27.4376V25.3543ZM6.81252 24.8333C6.52976 24.8333 6.29169 25.0713 6.29169 25.3543V27.4376C6.29169 27.7205 6.52963 27.9584 6.81252 27.9584H8.89585C9.17874 27.9584 9.41669 27.7205 9.41669 27.4376V25.3543C9.41669 25.0713 9.17862 24.8333 8.89585 24.8333H6.81252Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M41.1041 24.8333C40.8214 24.8333 40.5833 25.0713 40.5833 25.3543V27.4376C40.5833 27.7205 40.8213 27.9584 41.1041 27.9584H43.1875C43.4704 27.9584 43.7083 27.7205 43.7083 27.4376V25.3543C43.7083 25.0713 43.4702 24.8333 43.1875 24.8333H41.1041ZM37.4583 25.3543C37.4583 23.3456 39.0952 21.7083 41.1041 21.7083H43.1875C45.1964 21.7083 46.8333 23.3456 46.8333 25.3543V27.4376C46.8333 29.4464 45.1963 31.0834 43.1875 31.0834H41.1041C39.0954 31.0834 37.4583 29.4464 37.4583 27.4376V25.3543Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M23.4684 7.23338C23.5696 8.09037 22.9569 8.86715 22.0999 8.96837C14.9355 9.81456 9.375 15.8889 9.375 23.2708C9.375 24.1337 8.67544 24.8333 7.8125 24.8333C6.94956 24.8333 6.25 24.1337 6.25 23.2708C6.25 14.2777 13.0229 6.89375 21.7334 5.86494C22.5904 5.76372 23.3672 6.37639 23.4684 7.23338Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M26.616 7.22437C26.7222 6.36799 27.5026 5.75984 28.359 5.86604C37.0231 6.94049 43.75 14.3012 43.75 23.2708C43.75 24.1337 43.0504 24.8333 42.1875 24.8333C41.3245 24.8333 40.625 24.1337 40.625 23.2708C40.625 15.907 35.1019 9.85118 27.9744 8.96729C27.118 8.86109 26.5098 8.08076 26.616 7.22437Z" fill="#11212C"/>
        </svg>
      )
    case 'development':
      return (
        <svg className={`icon icon--${color}`} style={{width: width}} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.39654 8.33398C6.70958 10.0209 5.72919 12.6783 5.72919 16.6041V27.0208C5.72919 32.0944 6.75766 34.6336 8.3206 36.0011C9.93515 37.4139 12.5277 37.9583 16.6667 37.9583H17.7084C18.3038 37.9583 18.8776 38.1397 19.3343 38.3681C19.7848 38.5934 20.2762 38.9419 20.6305 39.4241L23.75 43.5833C24.1857 44.1643 24.6536 44.3333 25 44.3333C25.3465 44.3333 25.8143 44.1643 26.25 43.5833L29.375 39.4167L29.381 39.4087C30.0678 38.5051 31.1501 37.9583 32.2917 37.9583H33.3334C37.2592 37.9583 39.9165 36.9779 41.6035 35.2909C43.2905 33.604 44.2709 30.9466 44.2709 27.0208V16.6041C44.2709 12.6783 43.2905 10.0209 41.6035 8.33398C39.9165 6.64702 37.2592 5.66663 33.3334 5.66663H16.6667C12.7409 5.66663 10.0835 6.64702 8.39654 8.33398ZM6.18683 6.12427C8.66654 3.64456 12.2592 2.54163 16.6667 2.54163H33.3334C37.7409 2.54163 41.3335 3.64456 43.8132 6.12427C46.2929 8.60398 47.3959 12.1966 47.3959 16.6041V27.0208C47.3959 31.4283 46.2929 35.0209 43.8132 37.5006C41.3335 39.9804 37.7409 41.0833 33.3334 41.0833H32.2917C32.1427 41.0833 31.9763 41.1605 31.8712 41.2968C31.8705 41.2977 31.8698 41.2987 31.8691 41.2996L28.75 45.4583C27.8108 46.7107 26.4661 47.4583 25 47.4583C23.5339 47.4583 22.1892 46.7107 21.25 45.4583L18.1195 41.2844C18.1153 41.2802 18.1054 41.2709 18.0884 41.2574C18.0521 41.2288 18.0001 41.1949 17.9366 41.1631C17.8732 41.1314 17.8124 41.1089 17.7626 41.0956C17.7261 41.0858 17.7062 41.0837 17.703 41.0833H16.6667C12.4724 41.0833 8.81489 40.586 6.26277 38.3529C3.65905 36.0747 2.60419 32.3639 2.60419 27.0208V16.6041C2.60419 12.1966 3.70712 8.60398 6.18683 6.12427Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.7715 17.0202C18.3817 17.6304 18.3817 18.6197 17.7715 19.2299L14.7097 22.2917L17.7715 25.3535C18.3817 25.9637 18.3817 26.9531 17.7715 27.5632C17.1613 28.1734 16.172 28.1734 15.5618 27.5632L11.3951 23.3966C10.785 22.7864 10.785 21.7971 11.3951 21.1869L15.5618 17.0202C16.172 16.41 17.1613 16.41 17.7715 17.0202Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M32.2285 17.0202C32.8387 16.41 33.828 16.41 34.4382 17.0202L38.6049 21.1869C39.2151 21.7971 39.2151 22.7864 38.6049 23.3966L34.4382 27.5632C33.828 28.1734 32.8387 28.1734 32.2285 27.5632C31.6183 26.9531 31.6183 25.9637 32.2285 25.3535L35.2903 22.2917L32.2285 19.2299C31.6183 18.6197 31.6183 17.6304 32.2285 17.0202Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M27.6996 16.0017C28.4926 16.342 28.8595 17.2608 28.5192 18.0538L24.3525 27.7622C24.0122 28.5552 23.0934 28.9221 22.3004 28.5818C21.5074 28.2414 21.1405 27.3227 21.4808 26.5297L25.6475 16.8213C25.9878 16.0283 26.9066 15.6613 27.6996 16.0017Z" fill="#11212C"/>
        </svg>
      )
    case 'e-commerce':
      return (
        <svg className={`icon icon--${color}`} style={{width: width}} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.60419 4.16669C2.60419 3.30374 3.30374 2.60419 4.16669 2.60419H7.7917C10.27 2.60419 12.3322 4.27107 12.9853 6.50001H39.0208C43.4021 6.50001 46.7492 10.0776 46.4334 14.446L45.3085 30.0706L45.3079 30.0782C45.0167 33.8636 41.7202 36.9583 37.8959 36.9583H15.7083C11.382 36.9583 7.96968 33.2643 8.33891 28.9517C8.33897 28.951 8.33885 28.9524 8.33891 28.9517L10.0679 8.20359C10.1789 6.8836 9.12487 5.72919 7.7917 5.72919H4.16669C3.30374 5.72919 2.60419 5.02963 2.60419 4.16669ZM13.0853 9.62501L11.453 29.2131L11.4526 29.217C11.2398 31.6952 13.202 33.8333 15.7083 33.8333H37.8959C40.0704 33.8333 42.0229 32.0135 42.1919 29.842C42.1919 29.8409 42.192 29.8397 42.1921 29.8385L43.3165 14.2212C43.5007 11.6729 41.5979 9.62501 39.0208 9.62501H13.0853Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M33.8542 42.1875C33.2789 42.1875 32.8125 42.6539 32.8125 43.2292C32.8125 43.8045 33.2789 44.2708 33.8542 44.2708C34.4295 44.2708 34.8958 43.8045 34.8958 43.2292C34.8958 42.6539 34.4295 42.1875 33.8542 42.1875ZM29.6875 43.2292C29.6875 40.928 31.553 39.0625 33.8542 39.0625C36.1554 39.0625 38.0208 40.928 38.0208 43.2292C38.0208 45.5304 36.1554 47.3958 33.8542 47.3958C31.553 47.3958 29.6875 45.5304 29.6875 43.2292Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.1875 42.1875C16.6122 42.1875 16.1459 42.6539 16.1459 43.2292C16.1459 43.8045 16.6122 44.2708 17.1875 44.2708C17.7628 44.2708 18.2292 43.8045 18.2292 43.2292C18.2292 42.6539 17.7628 42.1875 17.1875 42.1875ZM13.0209 43.2292C13.0209 40.928 14.8864 39.0625 17.1875 39.0625C19.4887 39.0625 21.3542 40.928 21.3542 43.2292C21.3542 45.5304 19.4887 47.3958 17.1875 47.3958C14.8864 47.3958 13.0209 45.5304 13.0209 43.2292Z" fill="#11212C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.1875 16.6667C17.1875 15.8037 17.8871 15.1042 18.75 15.1042H43.75C44.6129 15.1042 45.3125 15.8037 45.3125 16.6667C45.3125 17.5296 44.6129 18.2292 43.75 18.2292H18.75C17.8871 18.2292 17.1875 17.5296 17.1875 16.6667Z" fill="#11212C"/>
        </svg>
      )
  }
}

Icon.defaultProps = {
  width: "50px",
  color: "dark"
}

export default Icon;