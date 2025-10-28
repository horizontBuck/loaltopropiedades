import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptLoaderService } from '../../services/script-loader.service';
@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail implements OnInit {
  constructor(public scriptLoader: ScriptLoaderService, private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

ngOnInit(): void {
  this.loadScripts();
}

async loadScripts(): Promise<void> {
  try {
    await this.scriptLoader.loadAll([
      // { src: 'js/bootstrap.min.js', attr: { defer: 'true' } },
      // { src: 'js/jquery.min.js', attr: { defer: 'true' } },
      { src: 'js/lazysize.min.js', attr: { defer: 'true' } },
      { src: 'js/wow.min.js', attr: { defer: 'true' } },
      { src: 'js/jquery.nice-select.min.js', attr: { defer: 'true' } },
      { src: 'js/swiper-bundle.min.js', attr: { defer: 'true' } },
      { src: 'js/swiper.js', attr: { defer: 'true' } },
      { src: 'js/odometer.min.js', attr: { defer: 'true' } },
      { src: 'js/counter.js', attr: { defer: 'true' } },
      { src: 'js/Splitetext.js', attr: { defer: 'true' } },
      { src: 'js/ScrollTrigger.min.js', attr: { defer: 'true' } },
      { src: 'js/gsap.min.js', attr: { defer: 'true' } },
      { src: 'js/rangle-slider.js', attr: { defer: 'true' } },
      { src: 'js/infinityslide.js', attr: { defer: 'true' } },
      { src: 'js/SmoothScroll.js', attr: { defer: 'true' } },

    { src: 'js/magnific-popup.min.js', attr: { defer: 'true' } },
    { src: 'js/jquery.fancybox.js', attr: { defer: 'true' } },



      // { src: 'js/main.js', attr: { defer: 'true' } },
      // { src: 'https://sibforms.com/forms/end-form/build/main.js', attr: { defer: 'true' } },
    ]);
  } catch (err) {
    console.error('Error cargando scripts en Detail', err);
  }
}
}