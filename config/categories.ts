import { Biotech } from '@emotion-icons/material';
import {
  Article,
  Help,
  School,
  WorkOutline,
} from '@emotion-icons/material-outlined';
import { CategoryData } from 'cv';
import {
  canContribute,
  education,
  experience,
  other,
  research,
} from '../assets/data/index';

export const categories: CategoryData[] = [
  {
    header: 'categories.experience',
    icon: WorkOutline,
    type: 'timeline',
    data: experience,
    order: { xs: 1, xl: 1 },
  },
  {
    header: 'categories.education',
    icon: School,
    type: 'timeline',
    data: education,
    order: { xs: 2, xl: 2 },
  },
  {
    header: 'categories.research',
    icon: Biotech,
    type: 'articles',
    data: research,
    order: { xs: 3, xl: 3 },
  },
  {
    header: 'categories.other',
    icon: Article,
    type: 'articles',
    data: other,
    order: { xs: 4, xl: 4 },
  },
  {
    header: 'categories.canContribute',
    icon: Help,
    type: 'list',
    data: canContribute,
    order: { xs: 5, xl: 5 },
  },
];
