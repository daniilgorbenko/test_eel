from currency_converter import CurrencyConverter

converter = CurrencyConverter()


def convert_value(value: float, from_cur: str, to_cur: str):
    return converter.convert(value, from_cur, to_cur)


