class UserJourneysController < ApplicationController
  before_action :set_user_journey, only: [:show, :edit, :update, :destroy]

  # GET /user_journeys
  # GET /user_journeys.json
  def index
    @user_journeys = UserJourney.all
  end

  # GET /user_journeys/1
  # GET /user_journeys/1.json
  def show
  end

  # GET /user_journeys/new
  def new
    @user_journey = UserJourney.new
  end

  # GET /user_journeys/1/edit
  def edit
  end

  # POST /user_journeys
  # POST /user_journeys.json
  def create
    @user_journey = UserJourney.new(user_journey_params)

    respond_to do |format|
      if @user_journey.save
        format.html { redirect_to @user_journey, notice: 'User journey was successfully created.' }
        format.json { render :show, status: :created, location: @user_journey }
      else
        format.html { render :new }
        format.json { render json: @user_journey.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_journeys/1
  # PATCH/PUT /user_journeys/1.json
  def update
    respond_to do |format|
      if @user_journey.update(user_journey_params)
        format.html { redirect_to @user_journey, notice: 'User journey was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_journey }
      else
        format.html { render :edit }
        format.json { render json: @user_journey.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_journeys/1
  # DELETE /user_journeys/1.json
  def destroy
    @user_journey.destroy
    respond_to do |format|
      format.html { redirect_to user_journeys_url, notice: 'User journey was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_journey
      @user_journey = UserJourney.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_journey_params
      params.fetch(:user_journey, {})
    end
end
