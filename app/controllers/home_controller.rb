class HomeController < ApplicationController
  def index
    @journey = Journey.last
  end
end
