import { Component, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { Router } from '@angular/router';

declare var Swiper: any; // para usar Swiper globalmente

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  isSearchFormVisible = false; // 🔹 Controla si se muestra u oculta

  constructor(
    public scriptLoader: ScriptLoaderService,
    private router: Router
  ) {}
  toggleSearchForm() {
    this.isSearchFormVisible = !this.isSearchFormVisible;
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  async ngAfterViewInit(): Promise<void> {
    try {
      await this.scriptLoader.loadAll([
        { src: 'js/lazysize.min.js', attr: { defer: 'true' } },
        { src: 'js/swiper-bundle.min.js', attr: { defer: 'true' } },
        
      // { src: 'js/main.js', attr: { defer: 'true' } },

      ]);

      // 🔹 Inicializar después que Angular renderiza la vista
      setTimeout(() => this.initSwiper(), 200);
    } catch (err) {
      console.error('Error cargando scripts en Home', err);
    }
  }

  private initSwiper() {
    const swiperEl = document.querySelector('.swiper');
    if (!swiperEl) {
      console.warn('Swiper no encontrado en el DOM');
      return;
    }

    // 🌀 Configuración base
    new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: { delay: 3000 },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
}
