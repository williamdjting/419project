'use client'

import { projectData } from '../../lib/project-data';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './ui-dashboard.module.css'


export default function ProjectLinks() {
  

  return (
    <>
    {projectData.map((project) => {
      return (
        <Link
          key={project.id}
          href={`/projects/${project.id}`} // Add the missing href property
        >
        <li className={styles.projectbox}>{project.name}</li>
        </Link>
      );
    })}
    
    </>

  )

}


