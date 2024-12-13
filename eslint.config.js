const { FlatCompat } = require('@eslint/eslintrc')
const nxEslintPlugin = require('@nx/eslint-plugin')
const js = require('@eslint/js')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

module.exports = [
  { plugins: { '@nx': nxEslintPlugin } },
  { settings: { react: { version: 'detect' } } },
  ...compat.extends('plugin:prettier/recommended'),
  ...compat
    .config({
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: true
      },
      settings: {
        'import/parsers': { '@typescript-eslint/parser': ['**/*.ts?(x)'] },
        'import/resolver': { typescript: { alwaysTryTypes: true } }
      },
      extends: [
        'eslint:recommended',
        'plugin:@nx/typescript',
        'plugin:@nx/react-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended'
      ]
    })
    .map(config => ({
      ...config,
      files: ['**/*.ts?(x)'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allowCircularSelfDependency: true,
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*']
              }
            ]
          }
        ]
      }
    })),
  ...compat
    .config({
      extends: ['plugin:testing-library/react'],
      env: { jest: true }
    })
    .map(config => ({
      ...config,
      files: ['**/*.{spec,test}.{ts,tsx}', '**/__tests__/*.{ts,tsx}']
    })),
  {
    files: ['**/*.json'],
    rules: {
      'prettier/prettier': 'off'
    },
    languageOptions: {
      parser: require('jsonc-eslint-parser')
    }
  },
  {
    ignores: [
      '# Custom',
      'dist',
      '# Paw',
      '**/*.paw',
      '# Linux',
      '*~',
      '.fuse_hidden*',
      '.directory',
      '.Trash-*',
      '# OSX',
      '**/*.DS_Store',
      '.AppleDouble',
      '.LSOverride',
      'Icon',
      '._*',
      '.DocumentRevisions-V100',
      '.fseventsd',
      '.Spotlight-V100',
      '.TemporaryItems',
      '.Trashes',
      '.VolumeIcon.icns',
      '.com.apple.timemachine.donotpresent',
      '.AppleDB',
      '.AppleDesktop',
      'Network Trash Folder',
      'Temporary Items',
      '.apdisk',
      '# VisualStudioCode',
      '.vscode/*',
      '!.vscode/settings.json',
      '!.vscode/tasks.json',
      '!.vscode/launch.json',
      '!.vscode/extensions.json',
      '# SublimeText',
      '**/*.tmlanguage.cache',
      '**/*.tmPreferences.cache',
      '**/*.stTheme.cache',
      '**/*.sublime-workspace',
      'sftp-config.json',
      'Package Control.last-run',
      'Package Control.ca-list',
      'Package Control.ca-bundle',
      'Package Control.system-ca-bundle',
      'Package Control.cache/',
      'Package Control.ca-certs/',
      'bh_unicode_properties.cache',
      'GitHub.sublime-settings',
      '# Intellij',
      '.idea/',
      '.idea/workspace.xml',
      '.idea/tasks.xml',
      '.idea/dictionaries',
      '.idea/vcs.xml',
      '.idea/jsLibraryMappings.xml',
      '.idea/dataSources.ids',
      '.idea/dataSources.xml',
      '.idea/dataSources.local.xml',
      '.idea/sqlDataSources.xml',
      '.idea/dynamic.xml',
      '.idea/uiDesigner.xml',
      '.idea/gradle.xml',
      '.idea/libraries',
      '.idea/mongoSettings.xml',
      '**/*.iws',
      'out/',
      '.idea_modules/',
      'atlassian-ide-plugin.xml',
      'com_crashlytics_export_strings.xml',
      'crashlytics.properties',
      'crashlytics-build.properties',
      'fabric.properties',
      '# Node',
      'logs',
      '**/*.log',
      'npm-debug.log*',
      'pids',
      '**/*.pid',
      '**/*.seed',
      '**/*.pid.lock',
      'lib-cov',
      'coverage',
      '.nyc_output',
      '.grunt',
      '.lock-wscript',
      'build/Release',
      'jspm_packages',
      '.npm',
      '.node_repl_history',
      '# Bower',
      'bower_components',
      '.bower-cache',
      '.bower-registry',
      '.bower-tmp',
      'public/data/mind.json',
      '# Install artifacts',
      'package-lock.json',
      '# Testing',
      'coverage/',
      '# Next.js',
      '.next/',
      '# Production',
      'build/',
      '# Misc',
      '.DS_Store',
      '**/*.pem',
      '# Debug',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '# Local env files',
      '.env*',
      '!.env.*.sample',
      '# Vercel',
      '.vercel',
      '# TypeScript',
      '**/*.tsbuildinfo',
      'next-env.d.ts',
      '# Editors',
      '.vscode/',
      '# Pocketbase',
      'pb_data/',
      '# Yarn',
      '.yarn/*',
      '!.yarn/cache/',
      '!.yarn/patches/',
      '!.yarn/plugins/',
      '!.yarn/releases/',
      '!.yarn/sdks/',
      '!.yarn/versions/',
      '# Bundle analyzer',
      'analyze/',
      '# PWA & Workbox',
      'public/sw.js',
      'public/sw.js.map',
      'public/workbox-*.js',
      'public/workbox-*.js.map',
      '# Bak files',
      '**/*.bak',
      '# Compiled output',
      'tmp',
      'out-tsc/',
      '# IDEs and editors',
      '.project',
      '.classpath',
      '.c9/',
      '**/*.launch',
      '.settings/',
      '# Misc',
      '.sass-cache',
      'connect.lock',
      'libpeerconnection.log',
      'testem.log',
      'typings/',
      '# System files',
      'Thumbs.db',
      '# NX',
      '.nx/cache/',
      'apps/*-server-*/',
      '# Sentry Config File',
      '.sentryclirc',
      '# Generated',
      'apps/**/src/**/__generated'
    ]
  }
]
