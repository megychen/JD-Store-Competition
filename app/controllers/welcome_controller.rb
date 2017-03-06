class WelcomeController < ApplicationController
  layout "welcome"
  after_action :intercom_shutdown, only: [:index]

  def index
    @products = Product.all.sort_by{|product| -product.fans.count}
    @products = @products.first(8)
    @p1 = @products[0]
    @p2 = @products[1]
    @p3 = @products[2]
    @p4 = @products[3]
    @p5 = @products[4]
    @p6 = @products[5]
    @p7 = @products[6]
    @p8 = @products[7]
  end

  def about
  end

  protected
  def intercom_shutdown
    IntercomRails::ShutdownHelper.intercom_shutdown(session, cookies)
  end
end
