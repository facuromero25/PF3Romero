interface NavItem {
  path: string;
  title: string;
  icon?: string;
}

const links: NavItem[] = [
  {
    path: 'alumnos',
    title: 'Alumnos',
    icon: 'person',
  },
  {
    path: 'cursos',
    title: 'Cursos',
    icon: 'school'
  },
  {
    path: 'inscripciones',
    title: 'Inscripciones',
    icon: 'school'
  },
  {
    path: 'Usuarios',
    title: 'Usuarios',
    icon: 'face'
  },
]

export default links;
