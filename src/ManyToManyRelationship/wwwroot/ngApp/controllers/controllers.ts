namespace ManyToManyRelationship.Controllers {

    export class HomeController {
        private MovieResource;
        public movies;
        
        public getMovies() {
            this.movies = this.MovieResource.query();

            
        }


       
        constructor(private $resource: angular.resource.IResourceService) {
            this.MovieResource = $resource("/api/movies");
            this.getMovies();
        }
    }

    export class AddActorToMovieController {
        private MovieResource;
        public movie;
        public actor;

        public getMovie(id: number) {
            this.movie = this.MovieResource.get({ id: id });
        }
        public addActorToMovie() {
            this.MovieResource.save({ id: this.movie.id }, this.actor).$promise.then(() => {
                this.movie = null;
                this.actor = null;
                this.$state.go("home");
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.MovieResource = $resource("/api/movies/:id");
            this.getMovie($stateParams["id"]);
            console.log(this.movie);
        }
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
