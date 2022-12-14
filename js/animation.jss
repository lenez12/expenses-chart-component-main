       .bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes bounceInUp {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 3000px, 0);
  transform: translate3d(0, 3000px, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
  }
  75% {
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
  }
  90% {
  -webkit-transform: translate3d(0, -5px, 0);
  transform: translate3d(0, -5px, 0);
  }
  100% {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  }
  }
  @keyframes bounceInUp {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 3000px, 0);
  transform: translate3d(0, 3000px, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
  }
  75% {
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
  }
  90% {
  -webkit-transform: translate3d(0, -5px, 0);
  transform: translate3d(0, -5px, 0);
  }
  100% {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  }
  }