import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';
import { ScriptLoaderService } from './services/script-loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,
    Footer,

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lo-alto');
  constructor(public scriptLoader: ScriptLoaderService, private router: Router) { }

navigateTo(route: string) {
  this.router.navigate([route]);
}

  async ngAfterViewInit(): Promise<void> {
    // Cargar solo los scripts necesarios para el carousel (jquery ya debería estar cargado en App)
    try {
      await this.scriptLoader.loadAll([
        // { src: 'js/bootstrap.min.js' , attr: { defer: 'true' } },
        // { src: 'js/jquery.min.js' , attr: { defer: 'true' } },
        // { src: 'js/lazysize.min.js' , attr: { defer: 'true' } },
        // { src: 'js/wow.min.js' , attr: { defer: 'true' } },
        // { src: 'js/jquery.nice-select.min.js' , attr: { defer: 'true' } },
        // { src: 'js/swiper-bundle.min.js' , attr: { defer: 'true' } },
        // // { src: 'js/swiper.js' , attr: { defer: 'true' } },
        // { src: 'js/odometer.min.js' , attr: { defer: 'true' } },
        // { src: 'js/counter.js' , attr: { defer: 'true' } },
        // { src: 'js/Splitetext.js' , attr: { defer: 'true' } },
        // { src: 'js/ScrollTrigger.min.js' , attr: { defer: 'true' } },
        // { src: 'js/gsap.min.js' , attr: { defer: 'true' } },
        // { src: 'js/rangle-slider.js' , attr: { defer: 'true' } },
        // { src: 'js/infinityslide.js' , attr: { defer: 'true' } },
        // { src: 'js/SmoothScroll.js' , attr: { defer: 'true' } },
        { src: 'js/main.js' , attr: { defer: 'true' } },
        // { src: 'https://sibforms.com/forms/end-form/build/main.js' , attr: { defer: 'true' } },


        // solo plugins que NO estén ya cargados globalmente
        // { src: 'assets/js/owl.carousel.min.js', attr: { defer: 'true' } },
        // { src: 'assets/js/slick.min.js', attr: { defer: 'true' } },
        // ...otros plugins que tu hero necesite (solo si no están cargados)
      ]);

      // Esperar micro-tick para asegurar que DOM está actualizado
      // setTimeout(() => this.initHeroCarousel(), 0);
    } catch (err) {
      console.error('Error cargando scripts en Home', err);
    }
  }

}
