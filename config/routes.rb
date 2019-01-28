Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show]
    resources :artists, only: [:index, :show] 
    resources :albums, only: [:index, :show] 
    resources :playlists, only: [:create, :index, :show, :destroy]
  end
  
  get 'api/albums/search/:search_string', to: 'api/albums#search'
  post 'api/playlists/:playlist_id/song/:song_id', to: 'api/playlists_songs#create'
  delete 'api/playlists/:playlist_id/song/:song_id', to: 'api/playlists_songs#destroy'

  root "static_pages#root"
end
