type TTabs = 'projects' | 'skills' | 'contacts';
type TTextSize = 'small' | 'medium' | 'large';

type TProject = {
  name: string;
  link: string;
  stack: string[];
  description: string;
  img: string;
}