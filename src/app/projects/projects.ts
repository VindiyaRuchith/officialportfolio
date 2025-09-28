import { Component } from '@angular/core';
import { ProjectsBackgroundComponent } from './background/background';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectsBackgroundComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      title: 'Plant-Ease',
      description: 'AI-powered plant disease detection system with XAI heatmap integration.',
      tech: ['React','Python', 'Flask', 'TensorFlow', 'Tailwind'],
      image: '/assets/projects/plant.png',
    },
    {
      title: 'Expense Tracker',
      description: 'A personal finance manager to track expenses, budgets, and savings.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: '/assets/projects/expense-tracker.png',
    },
    {
      title: 'Multi-Vendor E-Commerce',
      description: 'Marketplace system with vendor dashboards, orders, and Stripe payments.',
      tech: ['Next.js', 'Express', 'PostgreSQL', 'Stripe'],
      image: '/assets/projects/ecommerce.png',
    },
  ];
}