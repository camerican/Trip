require 'test_helper'

class UserJourneysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_journey = user_journeys(:one)
  end

  test "should get index" do
    get user_journeys_url
    assert_response :success
  end

  test "should get new" do
    get new_user_journey_url
    assert_response :success
  end

  test "should create user_journey" do
    assert_difference('UserJourney.count') do
      post user_journeys_url, params: { user_journey: {  } }
    end

    assert_redirected_to user_journey_url(UserJourney.last)
  end

  test "should show user_journey" do
    get user_journey_url(@user_journey)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_journey_url(@user_journey)
    assert_response :success
  end

  test "should update user_journey" do
    patch user_journey_url(@user_journey), params: { user_journey: {  } }
    assert_redirected_to user_journey_url(@user_journey)
  end

  test "should destroy user_journey" do
    assert_difference('UserJourney.count', -1) do
      delete user_journey_url(@user_journey)
    end

    assert_redirected_to user_journeys_url
  end
end
