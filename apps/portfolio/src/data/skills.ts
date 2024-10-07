import type { TBaseSeoData, TCommonPhotosData } from '@portfolio/types'

export type TSkillsData = Pick<TBaseSeoData, 'hero'> & {
  list: TSkillsListData[]
}
export type TSkillsListData = TCommonPhotosData & {
  id?: string
  name: string
  type: string
  image: TSkillsListImageData
}
export type TSkillsListImageData = {
  default: TCommonPhotosData
  dark?: TCommonPhotosData
}

// Skills data
export const skillsData: TSkillsData = {
  hero: {
    heading: 'Skills',
    description:
      'Explore the skills and expertise that enable me to create innovative, full-stack solutions, turning ideas into high-performance, scalable applications.'
  },
  list: [
    {
      id: 'f3d205bb-73e4-4c29-a58e-1ae01a4f9c8d',
      name: 'html-5',
      type: 'frontend',
      image: {
        default: {
          alt: 'HTML5 Default Logo',
          src: '/images/logos/html-5.svg'
        }
      }
    },
    {
      id: '76e6676e-8101-4a4c-89ba-60b67c7c6a77',
      name: 'css-3',
      type: 'frontend',
      image: {
        default: {
          alt: 'CSS3 Default Logo',
          src: '/images/logos/css-3.svg'
        }
      }
    },
    {
      id: 'f5a1e7b5-c3ac-4b60-bf66-bc6c3f95e09e',
      name: 'javascript',
      type: 'frontend',
      image: {
        default: {
          alt: 'JavaScript Default Logo',
          src: '/images/logos/javascript.svg'
        }
      }
    },
    {
      id: '2a6c9b26-157e-448b-b097-b6f28c89c823',
      name: 'typescript',
      type: 'frontend',
      image: {
        default: {
          alt: 'TypeScript Default Logo',
          src: '/images/logos/typescript.svg'
        }
      }
    },
    {
      id: '86ae292f-d749-4d95-a109-b8b4f77f2167',
      name: 'react',
      type: 'frontend',
      image: {
        default: {
          alt: 'React Default Logo',
          src: '/images/logos/react.svg'
        }
      }
    },
    {
      id: 'd1c7bc07-c4ee-4325-85d7-b145a47ff16d',
      name: 'next',
      type: 'frontend',
      image: {
        default: {
          alt: 'Next Default Logo',
          src: '/images/logos/next.svg'
        }
      }
    },
    {
      id: 'f509d0c1-6596-4a33-b832-51fe17b013e2',
      name: 'gatsby',
      type: 'frontend',
      image: {
        default: {
          alt: 'Gatsby Logo',
          src: '/images/logos/gatsby.svg'
        }
      }
    },
    {
      id: '90c58e0a-b26f-44fc-ae21-86f65f5fa240',
      name: 'vue',
      type: 'frontend',
      image: {
        default: {
          alt: 'Vue Default Logo',
          src: '/images/logos/vue.svg'
        }
      }
    },
    {
      id: '85912bd2-2c53-47eb-80b7-8035e8f31483',
      name: 'nuxt',
      type: 'frontend',
      image: {
        default: {
          alt: 'Nuxt Default Logo',
          src: '/images/logos/nuxt.svg'
        }
      }
    },
    {
      id: '0f2f8e1b-7dc2-42bb-84d5-7a2f8d5e9f3b',
      name: 'bootstrap',
      type: 'frontend',
      image: {
        default: {
          alt: 'Bootstrap Logo',
          src: '/images/logos/bootstrap.svg'
        }
      }
    },
    {
      id: '47b55d9e-7fb5-41c1-8504-5e1a1551b760',
      name: 'bulma',
      type: 'frontend',
      image: {
        default: {
          alt: 'Bulma Default Logo',
          src: '/images/logos/bulma.svg'
        }
      }
    },
    {
      id: '9a7b0a5d-3d6f-4b83-a6a0-0025a2aeaff3',
      name: 'tailwindcss',
      type: 'frontend',
      image: {
        default: {
          alt: 'TailwindCSS Logo',
          src: '/images/logos/tailwindcss.svg'
        }
      }
    },
    {
      id: 'b9c0d3ab-5db0-4b9a-83ec-9df0e73f7c67',
      name: 'headlessui',
      type: 'frontend',
      image: {
        default: {
          alt: 'HeadlessUI Logo',
          src: '/images/logos/headless-ui.svg'
        }
      }
    },
    {
      id: '53df77f0-f741-4d08-9233-ded1b07c26a3',
      name: 'redux',
      type: 'frontend',
      image: {
        default: {
          alt: 'Redux Default Logo',
          src: '/images/logos/redux.svg'
        }
      }
    },
    {
      id: '61b14015-cab8-4707-8336-c43e66d4fd30',
      name: 'tanstack-query',
      type: 'frontend',
      image: {
        default: {
          alt: 'Tanstack Query Logo',
          src: '/images/logos/tanstack-query.svg'
        }
      }
    },
    {
      id: '157a80df-e45a-4865-99ab-f9cfb9de59b1',
      name: 'react-native',
      type: 'frontend',
      image: {
        default: {
          alt: 'React Native Logo',
          src: '/images/logos/react.svg'
        }
      }
    },
    {
      id: 'f22dcd6b-e6da-43d0-9a08-bdcb16720f45',
      name: 'jquery',
      type: 'frontend',
      image: {
        default: {
          alt: 'JQuery Logo',
          src: '/images/logos/jquery.svg'
        },
        dark: {
          alt: 'JQuery Alternative Logo',
          src: '/images/logos/jquery-alt.svg'
        }
      }
    },
    {
      id: '8d61e1b7-3a3a-418f-b923-c740569b5c7b',
      name: 'twig',
      type: 'frontend',
      image: {
        default: {
          alt: 'Twig Logo',
          src: '/images/logos/twig.svg'
        }
      }
    },
    {
      id: 'd4f15cf1-08e8-4708-a131-df0a8a8c9395',
      name: 'sass',
      type: 'frontend',
      image: {
        default: {
          alt: 'Sass Logo',
          src: '/images/logos/sass.svg'
        }
      }
    },
    {
      id: '8ccf4c3c-7c85-4de1-b021-0c81be041038',
      name: 'postcss',
      type: 'frontend',
      image: {
        default: {
          alt: 'PostCSS Logo',
          src: '/images/logos/postcss.svg'
        }
      }
    },
    {
      id: 'c8190b5e-0943-4d92-8769-1c3bcb9a5ec2',
      name: 'styled-components',
      type: 'frontend',
      image: {
        default: {
          alt: 'Styled Components Logo',
          src: '/images/logos/styled-components.svg'
        }
      }
    },
    {
      id: '69ec1521-ef66-42ec-bcf8-e09a7e3b146a',
      name: 'emotion',
      type: 'frontend',
      image: {
        default: {
          alt: 'Emotion Logo',
          src: '/images/logos/emotion.svg'
        }
      }
    },
    {
      id: 'bd157d7c-62c5-4f1c-8d1a-8f95e3503e80',
      name: 'php',
      type: 'backend',
      image: {
        default: {
          alt: 'PHP Default Logo',
          src: '/images/logos/php.svg'
        }
      }
    },
    {
      id: 'ccf204e6-dfd8-4c94-bc5b-82c499a0c074',
      name: 'wordpress',
      type: 'backend',
      image: {
        default: {
          alt: 'WordPress Logo',
          src: '/images/logos/wordpress.svg'
        }
      }
    },
    {
      id: '1f152d7d-09a8-4a3f-9308-0cf089e46415',
      name: 'node',
      type: 'backend',
      image: {
        default: {
          alt: 'Node Default Logo',
          src: '/images/logos/node.svg'
        },
        dark: {
          alt: 'Node Alternative Logo',
          src: '/images/logos/node-alt.svg'
        }
      }
    },
    {
      id: 'c240cd0e-6f53-4380-8d7e-e79dbd70f8c0',
      name: 'express',
      type: 'backend',
      image: {
        default: {
          alt: 'Express Logo',
          src: '/images/logos/express.svg'
        }
      }
    },
    {
      id: 'cf0ad098-1f77-4c8b-9e8b-2f2d689370d3',
      name: 'python',
      type: 'backend',
      image: {
        default: {
          alt: 'Python Logo',
          src: '/images/logos/python.svg'
        }
      }
    },
    {
      id: '56b5c55a-c8ae-41d5-b676-1a2846e87f0c',
      name: 'django',
      type: 'backend',
      image: {
        default: {
          alt: 'Django Logo',
          src: '/images/logos/django.svg'
        }
      }
    },
    {
      id: 'a1e7a64b-ef38-49e3-9858-79eb4b1d23ab',
      name: 'go',
      type: 'backend',
      image: {
        default: {
          alt: 'Go Default Logo',
          src: '/images/logos/go.svg'
        }
      }
    },
    {
      id: '2bc48eb5-0e2f-4be8-8661-8985444ec9ef',
      name: 'graphql',
      type: 'backend',
      image: {
        default: {
          alt: 'GraphQL Logo',
          src: '/images/logos/graphql.svg'
        }
      }
    },
    {
      id: '6b156ba1-5f07-48e1-8b5f-f8794c07d15e',
      name: 'apollo',
      type: 'backend',
      image: {
        default: {
          alt: 'Apollo Logo',
          src: '/images/logos/apollo.svg'
        }
      }
    },
    {
      id: '0de16112-72f5-4c77-8c2c-9e4b6787ed96',
      name: 'mongoose',
      type: 'backend',
      image: {
        default: {
          alt: 'Mongoose Logo',
          src: '/images/logos/mongoose.svg'
        }
      }
    },
    {
      id: '008b8932-d650-4da1-bc12-0193cc8d1493',
      name: 'mysql',
      type: 'database',
      image: {
        default: {
          alt: 'MySQL Default Logo',
          src: '/images/logos/mysql.svg'
        }
      }
    },
    {
      id: '1c8af057-cbae-4646-b4de-235feb1a76a3',
      name: 'postgresql',
      type: 'database',
      image: {
        default: {
          alt: 'PostgreSQL Logo',
          src: '/images/logos/postgresql.svg'
        }
      }
    },
    {
      id: '333a1a5e-c5b0-48a0-8976-19ef00f0a4c0',
      name: 'mariadb',
      type: 'database',
      image: {
        default: {
          alt: 'MariaDB Logo',
          src: '/images/logos/mariadb.svg'
        }
      }
    },
    {
      id: 'ca4b1ec5-8da3-4ff8-b145-bad1f09be3cb',
      name: 'sqlite',
      type: 'database',
      image: {
        default: {
          alt: 'SQLite Logo',
          src: '/images/logos/sqlite.svg'
        }
      }
    },
    {
      id: 'e13793a6-5c4d-4600-9a35-4e46d282cf71',
      name: 'mongodb',
      type: 'database',
      image: {
        default: {
          alt: 'MongoDB Logo',
          src: '/images/logos/mongodb.svg'
        }
      }
    },
    {
      id: 'bde6ff5b-90f5-49c1-bbf4-9deec0a3d8cc',
      name: 'jest',
      type: 'testing',
      image: {
        default: {
          alt: 'Jest Default Logo',
          src: '/images/logos/jest.svg'
        }
      }
    },
    {
      id: '0082d06e-1c6c-4d6d-9310-6ecdd77963f7',
      name: 'testing-library',
      type: 'testing',
      image: {
        default: {
          alt: 'Testing Library Logo',
          src: '/images/logos/testing-library.svg'
        }
      }
    },
    {
      id: 'd3b2be8b-d503-40f1-a8e6-87b3cf8d4f2d',
      name: 'cypress',
      type: 'testing',
      image: {
        default: {
          alt: 'Cypress Logo',
          src: '/images/logos/cypress.svg'
        },
        dark: {
          alt: 'Cypress Alternative Logo',
          src: '/images/logos/cypress-alt.svg'
        }
      }
    },
    {
      id: '5fb9e9e2-cc5e-46e4-88df-6a5a7a472c83',
      name: 'yarn',
      type: 'tooling',
      image: {
        default: {
          alt: 'Yarn Logo',
          src: '/images/logos/yarn.svg'
        }
      }
    },
    {
      id: 'db1b3e29-df88-405f-85c8-2a66a8a97bb8',
      name: 'prettier',
      type: 'tooling',
      image: {
        default: {
          alt: 'Prettier Logo',
          src: '/images/logos/prettier.svg'
        }
      }
    },
    {
      id: 'a707849d-bc15-44c2-a0c3-1b133bce1af3',
      name: 'babel',
      type: 'tooling',
      image: {
        default: {
          alt: 'Babel Logo',
          src: '/images/logos/babel.svg'
        }
      }
    },
    {
      id: '4b0570e1-2b1f-4e0b-8e30-56f35e080ada',
      name: 'eslint',
      type: 'tooling',
      image: {
        default: {
          alt: 'ESLint Logo',
          src: '/images/logos/eslint.svg'
        }
      }
    },
    {
      id: 'd62b5d5e-c87f-4a8f-9c14-4c8fcd23e665',
      name: 'gulp',
      type: 'tooling',
      image: {
        default: {
          alt: 'Gulp Logo',
          src: '/images/logos/gulp.svg'
        }
      }
    },
    {
      id: '3e1d2e35-0733-4d7b-98ba-432e3e2c6e3a',
      name: 'axios',
      type: 'tooling',
      image: {
        default: {
          alt: 'Axios Logo',
          src: '/images/logos/axios.svg'
        }
      }
    },
    {
      id: 'efac7bc5-1b9d-4b64-80a1-b13c3b6f1fd5',
      name: 'figma',
      type: 'design',
      image: {
        default: {
          alt: 'Figma Default Logo',
          src: '/images/logos/figma.svg'
        }
      }
    },
    {
      id: '0a143c45-097d-4fb5-ae6b-55df627d63e8',
      name: 'sketch',
      type: 'design',
      image: {
        default: {
          alt: 'Sketch Logo',
          src: '/images/logos/sketch.svg'
        }
      }
    },
    {
      id: '647c7389-671b-4a0c-8ea7-3f2992d06595',
      name: 'prisma',
      type: 'tooling',
      image: {
        default: {
          alt: 'Prisma Logo',
          src: '/images/logos/prisma.svg'
        }
      }
    },
    {
      id: '6076f012-25f5-4426-a03e-2785c26f1de0',
      name: 'nginx',
      type: 'server',
      image: {
        default: {
          alt: 'NGINX Default Logo',
          src: '/images/logos/nginx.svg'
        }
      }
    },
    {
      id: '8cc51c30-7e2c-4d60-a9c6-32878e5e24f6',
      name: 'apache',
      type: 'server',
      image: {
        default: {
          alt: 'Apache Logo',
          src: '/images/logos/apache.svg'
        }
      }
    },
    {
      id: '8e171b51-5119-45db-8445-d09768b7e45a',
      name: 'linux',
      type: 'os',
      image: {
        default: {
          alt: 'Linux Default Logo',
          src: '/images/logos/linux.svg'
        }
      }
    },
    {
      id: '48e49d53-3448-4c8f-b1c2-63f4a05f1367',
      name: 'bash',
      type: 'tooling',
      image: {
        default: {
          alt: 'BASH Default Logo',
          src: '/images/logos/bash.svg'
        },
        dark: {
          alt: 'BASH Alternative Logo',
          src: '/images/logos/bash-alt.svg'
        }
      }
    },
    {
      id: '3f93ff3c-cd57-4b2e-a56e-4e2192a06359',
      name: 'docker',
      type: 'tooling',
      image: {
        default: {
          alt: 'Docker Logo',
          src: '/images/logos/docker.svg'
        }
      }
    },
    {
      id: 'c8df1404-7e35-470f-b509-73d9b35d2302',
      name: 'vagrant',
      type: 'tooling',
      image: {
        default: {
          alt: 'Vagrant Logo',
          src: '/images/logos/vagrant.svg'
        }
      }
    },
    {
      id: 'c9e9f930-f051-4c92-870e-4e6bfc9b1e8b',
      name: 'github-actions',
      type: 'tooling',
      image: {
        default: {
          alt: 'Github Actions Logo',
          src: '/images/logos/github-actions.svg'
        }
      }
    },
    {
      id: 'c85f7e05-ff62-48db-935c-9d320c9c90b4',
      name: 'circleci',
      type: 'tooling',
      image: {
        default: {
          alt: 'CircleCI Logo',
          src: '/images/logos/circleci.svg'
        }
      }
    },
    {
      id: '0bda11d3-2904-42ef-bb88-97f78b79b4c8',
      name: 'amazon-web-services',
      type: 'cloud',
      image: {
        default: {
          alt: 'Amazon Web Services Logo',
          src: '/images/logos/amazon-web-services.svg'
        }
      }
    },
    {
      id: '451b1c94-b64d-4e92-9349-22b62b3650f3',
      name: 'stripe',
      type: 'payments',
      image: {
        default: {
          alt: 'Stripe Logo',
          src: '/images/logos/stripe.svg'
        }
      }
    },
    {
      id: '408a69e3-d6b5-46f4-9be1-44c7d78e6d80',
      name: 'google-maps',
      type: 'tooling',
      image: {
        default: {
          alt: 'Google Maps Logo',
          src: '/images/logos/google-maps.svg'
        }
      }
    },
    {
      id: 'd2f9a6bc-609a-4d7e-8b8c-4fb154ae4a8d',
      name: 'sentry',
      type: 'monitoring',
      image: {
        default: {
          alt: 'Sentry Logo',
          src: '/images/logos/sentry.svg'
        }
      }
    },
    {
      id: '42ec9c55-08ec-4a5a-9f28-236b15daffb4',
      name: 'netlify',
      type: 'cloud',
      image: {
        default: {
          alt: 'Netlify Logo',
          src: '/images/logos/netlify.svg'
        }
      }
    },
    {
      id: '8b5c73c4-d1f7-44cc-bf98-cc6ef1cb39c1',
      name: 'vercel',
      type: 'cloud',
      image: {
        default: {
          alt: 'Vercel Default Logo',
          src: '/images/logos/vercel.svg'
        }
      }
    },
    {
      id: '4510cf69-2a82-4f1c-9d9d-9f4a1f3795e1',
      name: 'git',
      type: 'tooling',
      image: {
        default: {
          alt: 'Git Default Logo',
          src: '/images/logos/git.svg'
        }
      }
    },
    {
      id: 'f2763e4f-2bb3-4c15-84d3-c20d7c3449e5',
      name: 'github',
      type: 'tooling',
      image: {
        default: {
          alt: 'Github Logo',
          src: '/images/logos/github.svg'
        }
      }
    },
    {
      id: '3c88129f-6d3f-4860-8505-1b6f88a1311e',
      name: 'gitlab',
      type: 'tooling',
      image: {
        default: {
          alt: 'Gitlab Logo',
          src: '/images/logos/gitlab.svg'
        }
      }
    },
    {
      id: '03e6c31d-1841-4a5f-8038-2c9f2465b3e5',
      name: 'bitbucket',
      type: 'tooling',
      image: {
        default: {
          alt: 'Bitbucket Logo',
          src: '/images/logos/bitbucket.svg'
        }
      }
    },
    {
      id: 'd5f7fdb5-12f3-4ee8-a225-8d6af14b121d',
      name: 'jira',
      type: 'tooling',
      image: {
        default: {
          alt: 'Jira Default Logo',
          src: '/images/logos/jira.svg'
        }
      }
    },
    {
      id: '014e6f36-501d-4ba0-a66a-3690248b6cb1',
      name: 'confluence',
      type: 'tooling',
      image: {
        default: {
          alt: 'Confluence Logo',
          src: '/images/logos/confluence.svg'
        }
      }
    }
  ]
}
