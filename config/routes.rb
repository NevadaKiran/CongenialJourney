Rails.application.routes.draw do
  devise_for :users

  root 'application#index'

  resources :slates do
  	member do
  	  get :shared
  	end

  	collection do
  	  get :latest
  	end
  end
end




# Rails.application.routes.draw do
#   devise_for :users
#
#   root 'application#index'
#
#   resources :slates do
#   	collection do
#   	  get :latest
#   	end
#   end
# end
