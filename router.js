import { Router } from "@vaadin/router";

export let router;

export function initRouter() {
    router = new Router(this.shadowRoot.querySelector('#outlet'));

    router.setRoutes([
      { path: '/', component: 'pokemon-t' },
      { path: '/evolucion/:name', component: 'evolucion-p' },
      { path: '/edicion/:name/:evolution_name', component: 'edicion-p' }
    ]);
}
