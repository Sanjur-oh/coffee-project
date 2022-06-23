Rails.application.routes.draw do
  resources :partner_coffees
  resources :partners
  resources :coffees
  resources :users

  get '/me', to: 'users#show'
  get '/hello', to: 'application#hello_world'
  get "/cookie_click", to: 'sessions#click'
  
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
 
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post "/signup", to: "users#create"
  get "/authorized_user", to: "users#show"
end
