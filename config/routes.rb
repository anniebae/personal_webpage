Rails.application.routes.draw do
  root "main#index"

  get '/about' => "main#about"
  get '/projects' => "main#projects"
  get '/github' => "main#github"
  get '/resume' => "main#resume"
  get '/photography' => "main#photography"

end
