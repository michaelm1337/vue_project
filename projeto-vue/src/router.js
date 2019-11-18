import Vue from 'vue';
import Router from 'vue-router';
import Sobre from './components/Sobre/Sobre'
import Alunos from './components/Aluno/Alunos'
import Professor from './components/Professor/Professor'

Vue .use(Router);

export default new Router({
    routes: [
        {
            path: '/professores',
            nome: 'Professores',
            component: Professor
        },
        {
            path: '/alunos',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/sobre',
            nome: 'Sobre',
            component: Sobre
        }
    ]
})