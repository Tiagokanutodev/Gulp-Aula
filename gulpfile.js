const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


// Tarefa para compilar o SASS
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Tarefa para otimizar imagens
gulp.task('imagemin', function () {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Tarefa para minificar JavaScript
gulp.task('uglify', function() {
    return gulp.src('source/js/*.js') // Ajuste o padrão de origem com base na estrutura do seu projeto
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
  });


  

// Tarefa padrão que executa todas as tarefas
gulp.task('default', gulp.series('sass', 'imagemin', 'uglify'));