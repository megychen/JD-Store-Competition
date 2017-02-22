Rails.application.routes.draw do
  post '/rate' => 'rater#create', :as => 'rate'
  get '/info' => 'info#index'
  devise_for :users
  resources :products do
    member do
      post :add_to_cart
      post :favorite
      post :unfavorite
    end
    collection do
      get :search
    end
    resources :reviews, only: [:new, :create]
  end

  namespace :admin do
    resources :categories
    resources :products
    resources :orders do
      member do
        post :cancel
        post :ship
        post :shipped
        post :return
      end
    end
  end

  resources :carts do
    collection do
      delete :clean
      post :checkout
    end
  end

  resources :cart_items

  resources :orders do
    member do
      post :pay_with_alipay
      post :pay_with_wechat
      post :apply_to_cancel
    end
  end

  namespace :account do
    resources :orders
  end

  resources :favorites

  root "welcome#index"

  get 'about' => 'welcome#about'
end
