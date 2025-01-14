export default async function ({ addon, global, console }) {
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  ScratchBlocks.Blocks.motion_pointtowards_menu.init = function () {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "TOWARDS",
          options: [
            [ScratchBlocks.Msg.MOTION_POINTTOWARDS_POINTER, "_mouse_"],
            [ScratchBlocks.Msg.MOTION_POINTTOWARDS_RANDOM, "_random_"],
            SpriteMenu(),
          ],
        },
      ],
      colour: ScratchBlocks.Colours.motion.secondary,
      colourSecondary: ScratchBlocks.Colours.motion.secondary,
      colourTertiary: ScratchBlocks.Colours.motion.tertiary,
      extensions: ["output_string"],
    });
  };
}
