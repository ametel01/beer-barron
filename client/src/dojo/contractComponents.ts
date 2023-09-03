/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Auction: (() => {
      const name = "Auction";
      return defineComponent(
        world,
        {
          target_price: RecsType.Number,
          decay_constant: RecsType.Number,
          max_sellable: RecsType.Number,
          time_scale: RecsType.Number,
          start_time: RecsType.Number,
          sold: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    TavernAuction: (() => {
      const name = "TavernAuction";
      return defineComponent(
        world,
        {
          target_price: RecsType.Number,
          decay_constant: RecsType.Number,
          per_time_unit: RecsType.Number,
          start_time: RecsType.Number,
          sold: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    GoldBalance: (() => {
      const name = "GoldBalance";
      return defineComponent(
        world,
        {
          balance: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    ItemBalance: (() => {
      const name = "ItemBalance";
      return defineComponent(
        world,
        {
          balance: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    Game: (() => {
      const name = "Game";
      return defineComponent(
        world,
        {
          start_time: RecsType.Number,
          status: RecsType.Number,
          number_players: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    GameTracker: (() => {
      const name = "GameTracker";
      return defineComponent(
        world,
        {
          count: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    Ownership: (() => {
      const name = "Ownership";
      return defineComponent(
        world,
        {
          address: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    Player: (() => {
      const name = "Player";
      return defineComponent(
        world,
        {
          name: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    FarmArea: (() => {
      const name = "FarmArea";
      return defineComponent(
        world,
        {
          area_type: RecsType.Number,
          time_built: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    Brew: (() => {
      const name = "Brew";
      return defineComponent(
        world,
        {
          batch_key: RecsType.Number,
          owner: RecsType.Number,
          beer_id: RecsType.Number,
          time_built: RecsType.Number,
          status: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
    BrewBatchTrack: (() => {
      const name = "BrewBatchTrack";
      return defineComponent(
        world,
        {
          count: RecsType.Number,
        },
        {
          metadata: {
            name: name,
          },
        }
      );
    })(),
  };
}
