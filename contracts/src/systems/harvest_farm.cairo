#[system]
mod harvest_farm {
    use array::ArrayTrait;
    use array::SpanTrait;
    use box::BoxTrait;
    use traits::{Into, TryInto};
    use dojo::world::Context;
    use option::OptionTrait;
    use starknet::{ContractAddress, get_block_timestamp, get_caller_address};

    use beer_barron::components::game::{Game, GameTracker, GameTrait};
    use beer_barron::components::player::{Player};
    use beer_barron::components::player::{FarmArea};
    use beer_barron::components::balances::{ItemBalance};

    use beer_barron::constants::{
        GAME_CONFIG, hops, CROP_GROWTH_TIME, CROP_YIELD, SEED_GROWN_OFFSET, NUMBER_OF_FARM_PLOTS
    };

    fn execute(ctx: Context, game_id: u64) {
        // assert that the game is active
        let game = get!(ctx.world, (game_id), (Game));
        game.active();

        // TODO: assert that caller is player 

        // MAX AREAS = NUMBER_OF_FARM_PLOTS
        let mut area_id: usize = 0;

        // loop through all areas
        loop {
            if area_id >= NUMBER_OF_FARM_PLOTS.try_into().unwrap() {
                break;
            }

            let mut farm_area = get!(ctx.world, (game_id, ctx.origin, area_id), (FarmArea));

            if farm_area.area_type != 0 {
                let time_since_build = get_block_timestamp() - farm_area.time_built;

                // harvest and reset
                if (time_since_build > CROP_GROWTH_TIME.try_into().unwrap()) {
                    // get grown hop balance - see consts file
                    // grown item is the hop + 10 for ids
                    let mut item_balance = get!(
                        ctx.world,
                        (
                            game_id,
                            ctx.origin,
                            farm_area.area_type + SEED_GROWN_OFFSET.try_into().unwrap()
                        ),
                        (ItemBalance)
                    );
                    // reset time and area
                    item_balance.balance += CROP_YIELD.try_into().unwrap();

                    let updated_farm = FarmArea {
                        game_id,
                        player_id: ctx.origin,
                        area_id: area_id.into(),
                        area_type: 0,
                        time_built: 0
                    };
                    set!(ctx.world, (updated_farm, item_balance));
                }
            }

            area_id += 1;
        }
    }
}
