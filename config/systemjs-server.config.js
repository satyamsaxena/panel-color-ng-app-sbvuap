(function (global) {
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: 'src/tsconfig.json',
      module: 'system'
    },
    meta: {
      typescript: {
        exports: 'ts'
      }
    },
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      'app': 'src/',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'rxjs': 'npm:rxjs',
      'rxjs-compat': 'npm:rxjs-compat',
      'rxjs/operators': 'npm:rxjs/operators',
      'ts': 'npm:plugin-typescript/lib/plugin.js',
      'typescript': 'npm:typescript/lib/typescript.js',
      'ngx-color-picker': 'npm:ngx-color-picker/bundles/ngx-color-picker.umd.js'
    },
    packages: {
      'app': {
        main: 'main.ts',
        defaultExtension: 'ts',
        meta: {
          '*.ts': {
            loader: 'ts'
          }
        }
      },
      'rxjs': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'rxjs-compat': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'rxjs/operators': {
        main: 'index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
