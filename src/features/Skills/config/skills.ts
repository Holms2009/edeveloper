export function getSkillsList(type: 'primary' | 'secondary' | 'other') {
  const skills: TSkillsCollection = {
    primary: [
      { title: 'HTML', rating: 85 },
      { title: 'CSS', rating: 85 },
      { title: 'JavaScript', rating: 90 },
      { title: 'React', rating: 80 },
    ],
    secondary: [
      { title: 'SCSS', rating: 90 },
      { title: 'Redux', rating: 55 },
      { title: 'redux-toolkit', rating: 55 },
      { title: 'TypeScript', rating: 70 },
      { title: 'Vue 2', rating: 20 },
      { title: 'Svelte', rating: 10 },
    ],
    other: [
      { title: 'Git', rating: 70 },
      { title: 'Webpack', rating: 50 },
      { title: 'Vite', rating: 65 },
      { title: 'Figma', rating: 50 },
    ]
  }

  return skills[type];
}