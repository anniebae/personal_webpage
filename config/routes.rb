Rails.application.routes.draw do
  root "main#index"

  get '/about' => "main#about"
  get '/github' => "main#github"
  get '/resume' => "main#resume"
  get '/photography' => "main#photography"
  get '/contacts' => "main#contacts"

end
