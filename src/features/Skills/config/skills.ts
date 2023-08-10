export function getSkillsList(type: 'primary' | 'secondary' | 'other') {
  const skills: TSkillsCollection = {
    primary: [
      { title: 'HTML', rating: 70 },
      { title: 'CSS', rating: 70 },
      { title: 'JavaScript', rating: 75 },
      { title: 'React', rating: 65 },
    ],
    secondary: [
      { title: 'SCSS', rating: 70 },
      { title: 'Redux', rating: 50 },
      { title: 'redux-toolkit', rating: 40 },
      { title: 'TypeScript', rating: 55 },
      { title: 'Vue 2', rating: 15 },
      { title: 'Svelte', rating: 10 },
    ],
    other: [
      { title: 'Git', rating: 50 },
      { title: 'Webpack', rating: 40 },
      { title: 'Vite', rating: 55 },
      { title: 'Figma', rating: 50 },
    ]
  }

  return skills[type];
}