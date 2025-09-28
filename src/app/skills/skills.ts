import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsBackgroundComponent } from './background/background';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillsBackgroundComponent],
  templateUrl: './skills.html',
})
export class Skills {
  selectedSkill = signal<string | null>(null);

  skills = [
    { id: 'frontend', name: 'Frontend Development', icon: 'fas fa-code', gradient: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
    { id: 'backend', name: 'Backend & Databases', icon: 'fas fa-database', gradient: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: 'fas fa-cloud', gradient: 'bg-gradient-to-r from-pink-500 to-purple-500' },
  ];

  techs: Record<string, { name: string; logo: string }[]> = {
    frontend: [
      { name: 'Angular', logo: '/assets/tech/angular.png' },
      { name: 'React', logo: '/assets/tech/react.png' },
      { name: 'Tailwind CSS', logo: '/assets/tech/tailwind.png' },
      { name: 'TypeScript', logo: '/assets/tech/typescript.png' },
      { name: 'HTML5', logo: '/assets/tech/html5.png' },
      { name: 'CSS3', logo: '/assets/tech/css3.png' },
    ],
    backend: [
      { name: 'Node.js', logo: '/assets/tech/node.png' },
      { name: 'Python', logo: '/assets/tech/python.png' },
      { name: 'PostgreSQL', logo: '/assets/tech/postgresql.png' },
      { name: 'MySQL', logo: '/assets/tech/mysql.png' },
      { name: 'MSSQL Server', logo: '/assets/tech/sqlserver.png' },
      { name: '.NET', logo: '/assets/tech/dotnet.png' },
      { name: 'Flask', logo: '/assets/tech/flask.png' },
    ],
    cloud: [
      { name: 'Docker', logo: '/assets/tech/docker.png' },
      { name: 'AWS', logo: '/assets/tech/aws.png' },
      { name: 'CI/CD', logo: '/assets/tech/cicd.png' },
    ],
  };

  get selectedSkillName(): string | null {
    const skillId = this.selectedSkill();
    if (!skillId) return null;
    const skill = this.skills.find(s => s.id === skillId);
    return skill ? skill.name : null;
  }


  openSkill(skillId: string) {
    this.selectedSkill.set(skillId);
  }

  closeModal() {
    this.selectedSkill.set(null);
  }
}
